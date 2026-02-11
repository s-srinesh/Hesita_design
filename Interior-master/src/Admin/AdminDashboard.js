// import React, { useEffect, useState, useCallback } from 'react';
// import './AdminDashboard.css';
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';


// const AdminDashboard = () => {
//   const [bookings, setBookings] = useState([]);
//   const [analytics, setAnalytics] = useState({});
//   const [search, setSearch] = useState('');
//   const [modalBooking, setModalBooking] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [bookingsPerPage] = useState(5);
//   const [filter, setFilter] = useState({
//     status: '',
//     serviceType: '',
//     startDate: '',
//     endDate: ''
//   });

//   const fetchBookings = useCallback(async () => {
//     const query = new URLSearchParams(filter).toString();
//     try {
//       const res = await fetch(`http://localhost:5000/api/bookings?${query}`);
//       const data = await res.json();
//       setBookings(data);
//     } catch (error) {
//       console.error('Error fetching bookings:', error);
//     }
//   }, [filter]);

//   const fetchAnalytics = useCallback(async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/bookings/analytics');
//       const data = await res.json();
//       setAnalytics(data);
//     } catch (error) {
//       console.error('Error fetching analytics:', error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchBookings();
//     fetchAnalytics();
//   }, [fetchBookings, fetchAnalytics]);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilter((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAction = async (bookingId, action) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/bookings/${action}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ bookingId }),
//       });
//       const result = await res.json();
//       alert(result.message);
//       fetchBookings();
//     } catch (err) {
//       alert('Error processing the action');
//       console.error(err);
//     }
//   };

//   const handleDelete = async (bookingId) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/bookings/${bookingId}`, {
//         method: 'DELETE',
//       });
//       const result = await res.json();
//       alert(result.message);
//       fetchBookings();
//     } catch (err) {
//       alert('Error deleting the booking');
//       console.error(err);
//     }
//   };

//   const handleExportCSV = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/bookings/export');
//       const csv = await res.text();
//       const blob = new Blob([csv], { type: 'text/csv' });
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = 'bookings.csv';
//       link.click();
//     } catch (err) {
//       console.error('Error exporting CSV:', err);
//     }
//   };

//   const filteredBookings = bookings.filter((b) =>
//     b.fullName.toLowerCase().includes(search.toLowerCase())
//   );

//   const indexOfLast = currentPage * bookingsPerPage;
//   const indexOfFirst = indexOfLast - bookingsPerPage;
//   const currentBookings = filteredBookings.slice(indexOfFirst, indexOfLast);

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(filteredBookings.length / bookingsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const COLORS = ['#38A169', '#ED8936', '#E53E3E'];

//   return (
//     <div className="adminDashboard">
//       <h2>Admin Dashboard</h2>

//       <div className="dashboardOverview">
//         <div className="dashboardCard">
//           <h3>Filter Bookings</h3>
//           <div className="filterForm">
//             <select name="status" value={filter.status} onChange={handleFilterChange}>
//               <option value="">Status</option>
//               <option value="pending">Pending</option>
//               <option value="confirmed">Confirmed</option>
//               <option value="rejected">Rejected</option>
//             </select>
//             <select name="serviceType" value={filter.serviceType} onChange={handleFilterChange}>
//             <option value="">Select a service</option>
//             <option value="Living Room Interior">Living Room Interior</option>
//             <option value="Bedroom Design">Bedroom Design</option>
//             <option value="Kitchen Renovation">Kitchen Renovation</option>
//             <option value="Full Home Design">Full Home Design</option>
//             </select>
//             <input type="date" name="startDate" value={filter.startDate} onChange={handleFilterChange} />
//             <input type="date" name="endDate" value={filter.endDate} onChange={handleFilterChange} />
//             <button onClick={fetchBookings}>Apply Filters</button>
//           </div>
//         </div>

//         <div className="dashboardCard analytics">
//           <h3>Analytics</h3>
//           <p>Total Bookings: {analytics.totalBookings || 0}</p>
//           <p>Pending: {analytics.pendingBookings || 0}</p>
//           <p>Confirmed: {analytics.confirmedBookings || 0}</p>
//           <p>Rejected: {analytics.rejectedBookings || 0}</p>
//         </div>

//         <div className="dashboardCard">
//           <h3>Status Breakdown</h3>
//           <ResponsiveContainer width="100%" height={200}>
//             <PieChart>
//               <Pie
//                 dataKey="value"
//                 data={[
//                   { name: 'Confirmed', value: analytics.confirmedBookings || 0 },
//                   { name: 'Pending', value: analytics.pendingBookings || 0 },
//                   { name: 'Rejected', value: analytics.rejectedBookings || 0 },
//                 ]}
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={70}
//                 label
//               >
//                 {COLORS.map((color, index) => (
//                   <Cell key={`cell-${index}`} fill={color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <input
//         type="text"
//         placeholder="Search by name..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="searchInput"
//       />

//       <table className="dashboardTable">
//         <thead>
//           <tr>
//             <th>Full Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Service</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentBookings.map((b) => (
//             <tr key={b._id} onClick={() => setModalBooking(b)}>
//               <td>{b.fullName}</td>
//               <td>{b.email}</td>
//               <td>{b.phone}</td>
//               <td>{b.serviceType}</td>
//               <td>{new Date(b.preferredDate).toLocaleDateString()}</td>
//               <td><span className={`statusTag ${b.status}`}>{b.status}</span></td>
//               <td>
//                 {b.status === 'pending' && (
//                   <>
//                     <button className="confirmBtn" onClick={(e) => { e.stopPropagation(); handleAction(b._id, 'confirm'); }}>Confirm</button>
//                     <button className="rejectBtn" onClick={(e) => { e.stopPropagation(); handleAction(b._id, 'reject'); }}>Reject</button>
//                   </>
//                 )}
//                 <button className="deleteBtn" onClick={(e) => { e.stopPropagation(); handleDelete(b._id); }}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination">
//         {pageNumbers.map((number) => (
//           <button
//             key={number}
//             className={`pageBtn ${currentPage === number ? 'active' : ''}`}
//             onClick={() => setCurrentPage(number)}
//           >
//             {number}
//           </button>
//         ))}
//       </div>

//       <button  className="confirmBtn" onClick={handleExportCSV}>Export CSV</button>

//       {modalBooking && (
//         <div className="modalOverlay" onClick={() => setModalBooking(null)}>
//           <div className="modalContent" onClick={(e) => e.stopPropagation()}>
//             <h3>Booking Details</h3>
//             <p><strong>Name:</strong> {modalBooking.fullName}</p>
//             <p><strong>Email:</strong> {modalBooking.email}</p>
//             <p><strong>Phone:</strong> {modalBooking.phone}</p>
//             <p><strong>Service:</strong> {modalBooking.serviceType}</p>
//             <p><strong>Date:</strong> {new Date(modalBooking.preferredDate).toLocaleDateString()}</p>
//             <p><strong>Notes:</strong> {modalBooking.notes || 'None'}</p>
//             <p><strong>Status:</strong> {modalBooking.status}</p>
//             <button onClick={() => setModalBooking(null)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useEffect, useState, useCallback } from 'react';
import './AdminDashboard.css';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [analytics, setAnalytics] = useState({});
  const [search, setSearch] = useState('');
  const [modalBooking, setModalBooking] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage] = useState(5);
  const [filter, setFilter] = useState({
    status: '',
    serviceType: '',
    startDate: '',
    endDate: ''
  });

  const fetchBookings = useCallback(async () => {
    const query = new URLSearchParams(filter).toString();
    try {
      const res = await fetch(`https://hesita-design.onrender.com/api/bookings?${query}`);  // Updated URL
      const data = await res.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  }, [filter]);

  const fetchAnalytics = useCallback(async () => {
    try {
      const res = await fetch('https://hesita-design.onrender.com/api/bookings/analytics');  // Updated URL
      const data = await res.json();
      setAnalytics(data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  }, []);

  useEffect(() => {
    fetchBookings();
    fetchAnalytics();
  }, [fetchBookings, fetchAnalytics]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const handleAction = async (bookingId, action) => {
    try {
      const res = await fetch(`https://hesita-design.onrender.com/api/bookings/${action}`, {  // Updated URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingId }),
      });
      const result = await res.json();
      alert(result.message);
      fetchBookings();
    } catch (err) {
      alert('Error processing the action');
      console.error(err);
    }
  };

  const handleDelete = async (bookingId) => {
    try {
      const res = await fetch(`https://hesita-design.onrender.com/api/bookings/${bookingId}`, {  // Updated URL
        method: 'DELETE',
      });
      const result = await res.json();
      alert(result.message);
      fetchBookings();
    } catch (err) {
      alert('Error deleting the booking');
      console.error(err);
    }
  };

  const handleExportCSV = async () => {
    try {
      const res = await fetch('https://hesita-design.onrender.com/api/bookings/export');  // Updated URL
      const csv = await res.text();
      const blob = new Blob([csv], { type: 'text/csv' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'bookings.csv';
      link.click();
    } catch (err) {
      console.error('Error exporting CSV:', err);
    }
  };

  const filteredBookings = bookings.filter((b) =>
    b.fullName.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLast = currentPage * bookingsPerPage;
  const indexOfFirst = indexOfLast - bookingsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirst, indexOfLast);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredBookings.length / bookingsPerPage); i++) {
    pageNumbers.push(i);
  }

  const COLORS = ['#38A169', '#ED8936', '#E53E3E'];

  return (
    <div className="adminDashboard">
      <h2>Admin Dashboard</h2>

      <div className="dashboardOverview">
        <div className="dashboardCard">
          <h3>Filter Bookings</h3>
          <div className="filterForm">
            <select name="status" value={filter.status} onChange={handleFilterChange}>
              <option value="">Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="rejected">Rejected</option>
            </select>
            <select name="serviceType" value={filter.serviceType} onChange={handleFilterChange}>
              <option value="">Select a service</option>
              <option value="Living Room Interior">Living Room Interior</option>
              <option value="Bedroom Design">Bedroom Design</option>
              <option value="Kitchen Renovation">Kitchen Renovation</option>
              <option value="Full Home Design">Full Home Design</option>
            </select>
            <input type="date" name="startDate" value={filter.startDate} onChange={handleFilterChange} />
            <input type="date" name="endDate" value={filter.endDate} onChange={handleFilterChange} />
            <button onClick={fetchBookings}>Apply Filters</button>
          </div>
        </div>

        <div className="dashboardCard analytics">
          <h3>Analytics</h3>
          <p>Total Bookings: {analytics.totalBookings || 0}</p>
          <p>Pending: {analytics.pendingBookings || 0}</p>
          <p>Confirmed: {analytics.confirmedBookings || 0}</p>
          <p>Rejected: {analytics.rejectedBookings || 0}</p>
        </div>

        <div className="dashboardCard">
          <h3>Status Breakdown</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                dataKey="value"
                data={[ 
                  { name: 'Confirmed', value: analytics.confirmedBookings || 0 },
                  { name: 'Pending', value: analytics.pendingBookings || 0 },
                  { name: 'Rejected', value: analytics.rejectedBookings || 0 },
                ]}
                cx="50%"
                cy="50%"
                outerRadius={70}
                label
              >
                {COLORS.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            {[
              { name: 'Confirmed', color: '#38A169' },
              { name: 'Pending', color: '#ED8936' },
              { name: 'Rejected', color: '#E53E3E' },
            ].map(({ name, color }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', margin: '0 15px' }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: color,
                    borderRadius: 4,
                    marginRight: 8,
                  }}
                />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchInput"
      />

      <table className="dashboardTable">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBookings.map((b) => (
            <tr key={b._id} onClick={() => setModalBooking(b)}>
              <td>{b.fullName}</td>
              <td>{b.email}</td>
              <td>{b.phone}</td>
              <td>{b.serviceType}</td>
              <td>{new Date(b.preferredDate).toLocaleDateString()}</td>
              <td><span className={`statusTag ${b.status}`}>{b.status}</span></td>
              <td>
                {b.status === 'pending' && (
                  <>
                    <button className="confirmBtn" onClick={(e) => { e.stopPropagation(); handleAction(b._id, 'confirm'); }}>Confirm</button>
                    <button className="rejectBtn" onClick={(e) => { e.stopPropagation(); handleAction(b._id, 'reject'); }}>Reject</button>
                  </>
                )}
                <button className="deleteBtn" onClick={(e) => { e.stopPropagation(); handleDelete(b._id); }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`pageBtn ${currentPage === number ? 'active' : ''}`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </div>

      <button className="confirmBtn" onClick={handleExportCSV}>Export CSV</button>

      {modalBooking && (
        <div className="modalOverlay" onClick={() => setModalBooking(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h3>Booking Details</h3>
            <p><strong>Name:</strong> {modalBooking.fullName}</p>
            <p><strong>Email:</strong> {modalBooking.email}</p>
            <p><strong>Phone:</strong> {modalBooking.phone}</p>
            <p><strong>Service:</strong> {modalBooking.serviceType}</p>
            <p><strong>Date:</strong> {new Date(modalBooking.preferredDate).toLocaleDateString()}</p>
            <p><strong>Notes:</strong> {modalBooking.notes || 'None'}</p>
            <p><strong>Status:</strong> {modalBooking.status}</p>
            <button onClick={() => setModalBooking(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
