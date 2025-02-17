import { useState } from "react";
import axios from "axios";

const ReferralModal = ({ isOpen, onClose }) => {
  const courses = [
    { name: "Professional Certificate Program in Product Management", bonus: "₹7,000" },
    { name: "PG Certificate Program in Strategic Product Management", bonus: "₹9,000"},
    { name: "Executive Program in Data Driven Product Management", bonus: "₹10,000"}
  ];

  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    referralCode: Math.random().toString(36).substring(2, 10).toUpperCase(),
    message: "",
    termsAccepted: false,
    course: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("https://accredian-backend-task-h5zh.onrender.com/refer", formData);
      setSuccess("Referral submitted successfully!");
      alert(response.data.message);

      setFormData({
        referrerName: "",
        referrerEmail: "",
        refereeName: "",
        refereeEmail: "",
        referralCode: Math.random().toString(36).substring(2, 10).toUpperCase(),
        message: "",
        termsAccepted: false,
        course: "",
      });

      setTimeout(() => {
        setSuccess(null);
        onClose();
      }, 2000);
    } catch (error) {
      setError("Failed to submit referral.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">Refer a Friend</h2>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Referrer Name</label>
              <input type="text" name="referrerName" value={formData.referrerName} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Referrer Email</label>
              <input type="email" name="referrerEmail" value={formData.referrerEmail} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Referral Code</label>
              <input type="text" value={formData.referralCode} disabled className="w-full p-2 border rounded bg-gray-100" />
            </div>
            <div>
              <label className="block text-sm font-medium">Referee Name</label>
              <input type="text" name="refereeName" value={formData.refereeName} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Referee Email</label>
              <input type="email" name="refereeEmail" value={formData.refereeEmail} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Select Course</label>
              <select name="course" value={formData.course} onChange={handleChange} className="w-full p-2 border rounded" required>
                <option value="">-- Select a Course --</option>
                {courses.map((course, index) => (
                  <option key={index} value={course.name}>
                    {course.name} (Bonus: {course.bonus})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Message (Optional)</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
                <span className="text-sm">I agree to the Terms & Conditions</span>
              </label>
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
              <button type="submit" className={`px-4 py-2 text-white rounded ${loading ? "bg-gray-400" : "bg-blue-500"}`} disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default ReferralModal;
