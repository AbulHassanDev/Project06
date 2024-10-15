import{ useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [idProof, setIdProof] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Fetch user profile on component mount
    useEffect(() => {
        fetchUserProfile();
    }, []);

    // Fetch user profile from API
    const fetchUserProfile = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/user/profile');
            setProfile(response.data);
            setProfilePicture(response.data.profilePictureUrl);
        } catch (error) {
            console.error('Error fetching profile:', error);
            setMessage('Failed to load profile.');
        } finally {
            setLoading(false);
        }
    };

    // Handlers for form changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    const handleIdProofUpload = (e) => {
        setIdProof(e.target.files[0]);
    };

    const handleProfilePictureUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(file); // Store the file in state
        }
    };

    const handleUploadProfilePicture = async () => {
        if (!profilePicture || typeof profilePicture === 'string') return;

        const formData = new FormData();
        formData.append('file', profilePicture);

        try {
            setLoading(true);
            await axios.post('/api/user/profile-picture', formData);
            setMessage('Profile picture uploaded successfully!');
        } catch (error) {
            console.error('Error uploading profile picture:', error);
            setMessage('Failed to upload profile picture.');
        } finally {
            setLoading(false);
        }
    };

    // Save profile updates
    const handleSave = async () => {
        try {
            setLoading(true);
            await axios.put('/api/user/profile', profile);
            setMessage('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
            setMessage('Failed to update profile.');
        } finally {
            setLoading(false);
        }
    };

    // Change user password
    const handleChangePassword = async () => {
        if (passwords.newPassword !== passwords.confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        try {
            setLoading(true);
            await axios.put('/api/user/password', {
                currentPassword: passwords.currentPassword,
                newPassword: passwords.newPassword,
            });
            setMessage('Password changed successfully!');
            setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
        } catch (error) {
            console.error('Error changing password:', error);
            setMessage('Failed to change password.');
        } finally {
            setLoading(false);
        }
    };

    // Upload ID proof
    const handleUploadIdProof = async () => {
        if (!idProof) return;

        const formData = new FormData();
        formData.append('file', idProof);

        try {
            setLoading(true);
            await axios.post('/api/user/id-proof', formData);
            setMessage('ID proof uploaded successfully!');
        } catch (error) {
            console.error('Error uploading ID proof:', error);
            setMessage('Failed to upload ID proof.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                {loading && <p>Loading...</p>}
                {message && <p className="text-red-500">{message}</p>}
                
                <div className="flex items-center space-x-6">
                    <div className="relative">
                        <img
                            src={profilePicture ? URL.createObjectURL(profilePicture) : 'https://via.placeholder.com/150'}
                            alt="Profile"
                            className="w-32 h-32 rounded-full border-2 border-gray-300"
                        />
                        <input
                            type="file"
                            onChange={handleProfilePictureUpload} // This triggers the file selection
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <button
                            onClick={handleUploadProfilePicture}
                            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Upload Profile Picture
                        </button>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold">{profile.name}</h2>
                        <p className="text-gray-500">{profile.email}</p>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                            className="p-2 border rounded w-full"
                        />
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            className="p-2 border rounded w-full"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={profile.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            className="p-2 border rounded w-full"
                        />
                        <input
                            type="text"
                            name="address"
                            value={profile.address}
                            onChange={handleInputChange}
                            placeholder="Address"
                            className="p-2 border rounded w-full"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">ID Proof Upload</h3>
                    <input
                        type="file"
                        onChange={handleIdProofUpload}
                        className="p-2 border rounded w-full"
                    />
                    <button
                        onClick={handleUploadIdProof}
                        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Upload ID Proof
                    </button>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Change Password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="password"
                            name="currentPassword"
                            value={passwords.currentPassword}
                            onChange={handlePasswordChange}
                            placeholder="Current Password"
                            className="p-2 border rounded w-full"
                        />
                        <input
                            type="password"
                            name="newPassword"
                            value={passwords.newPassword}
                            onChange={handlePasswordChange}
                            placeholder="New Password"
                            className="p-2 border rounded w-full"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={passwords.confirmPassword}
                            onChange={handlePasswordChange}
                            placeholder="Confirm Password"
                            className="p-2 border rounded w-full"
                        />
                    </div>
                    <button
                        onClick={handleChangePassword}
                        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Change Password
                    </button>
                </div>

                <div className="mt-6">
                    <button
                        onClick={handleSave}
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
