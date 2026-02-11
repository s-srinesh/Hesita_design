const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const json2csv = require('json2csv').parse;

// POST /api/bookings (Create a new booking)
router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to save booking' });
  }
});

// Get All Bookings (Admin Side) with Search and Filter
router.get('/', async (req, res) => {
  const { status, serviceType, startDate, endDate } = req.query;
  
  let filter = {};
  if (status) filter.status = status;
  if (serviceType) filter.serviceType = serviceType;
  if (startDate && endDate) {
    filter.preferredDate = { $gte: new Date(startDate), $lte: new Date(endDate) };
  }

  try {
    const bookings = await Booking.find(filter).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch bookings', error: err.message });
  }
});

// Booking Export to CSV
router.get('/export', async (req, res) => {
  try {
    const bookings = await Booking.find();
    const csv = json2csv(bookings);
    res.header('Content-Type', 'text/csv');
    res.attachment('bookings.csv');
    res.send(csv);
  } catch (err) {
    res.status(500).json({ message: 'Failed to export bookings', error: err.message });
  }
});

// Booking Analytics/Statistics
router.get('/analytics', async (req, res) => {
  try {
    const totalBookings = await Booking.countDocuments();
    const pendingBookings = await Booking.countDocuments({ status: 'pending' });
    const confirmedBookings = await Booking.countDocuments({ status: 'confirmed' });
    const rejectedBookings = await Booking.countDocuments({ status: 'rejected' });

    const serviceTypeStats = await Booking.aggregate([
      { $group: { _id: '$serviceType', count: { $sum: 1 } } },
    ]);

    res.status(200).json({
      totalBookings,
      pendingBookings,
      confirmedBookings,
      rejectedBookings,
      serviceTypeStats,
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch analytics', error: err.message });
  }
});

// POST /api/bookings/:action (Confirm or Reject a booking)
router.post('/:action', async (req, res) => {
  const { bookingId } = req.body;
  const { action } = req.params;

  if (!['confirm', 'reject'].includes(action)) {
    return res.status(400).json({ message: 'Invalid action' });
  }

  const newStatus = action === 'confirm' ? 'confirmed' : 'rejected';

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { status: newStatus },
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: `Booking ${newStatus} successfully.` });
  } catch (err) {
    console.error('Error updating booking:', err);
    res.status(500).json({ message: 'Failed to update booking status' });
  }
});

// DELETE /api/bookings/:id (Delete a booking)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (err) {
    console.error('Error deleting booking:', err);
    res.status(500).json({ message: 'Failed to delete booking' });
  }
});

module.exports = router;
