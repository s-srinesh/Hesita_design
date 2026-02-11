// Example (bookingController.js)
const booking = await Booking.findByIdAndUpdate(
    req.params.id,
    { status: "confirmed", note: req.body.note }, // ← save note here
    { new: true }
  );
  