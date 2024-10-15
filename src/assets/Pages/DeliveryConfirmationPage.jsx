import { useState } from 'react';
import { useForm } from 'react-hook-form';

const DeliveryConfirmationPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [filePreview, setFilePreview] = useState(null);

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Submitted data:', data);
    alert('Confirmation files uploaded successfully!');
    reset();
    setFilePreview(null);
  };

  // Handle file upload preview (this can be extended for specific media types)
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Show file name for preview
      setFilePreview(file.name);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Delivery Confirmation Page</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 shadow-lg rounded-lg">
        
        {/* File Upload Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Upload Confirmation File</label>
          <input
            type="file"
            accept="audio/*,video/*,image/*" // Allow audio, video, and image files
            {...register('confirmationFile', { required: 'File upload is required' })}
            className="mt-1 block w-full text-gray-500"
            onChange={handleFileUpload}
          />
          {errors.confirmationFile && <p className="text-red-500 text-sm">{errors.confirmationFile.message}</p>}
        </div>

        {/* File Preview */}
        {filePreview && (
          <div className="mt-4">
            <p className="text-gray-600">File Preview:</p>
            <p className="mt-2 text-gray-800">{filePreview}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700"
        >
          Submit Confirmation
        </button>
      </form>
    </div>
  );
};

export default DeliveryConfirmationPage;
