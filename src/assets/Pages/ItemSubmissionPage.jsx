import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import Input from '../components/Input'; // Import the Input component

const ItemSubmissionPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple submissions

  // Handle form submission
  const onSubmit = (data) => {
    console.log('Submitted data:', data);
    alert('Item submitted successfully!');

    // Reset form and state
    reset();
    setImagePreview(null);
    setIsSubmitting(false); // Re-enable button after submission
  };

  // Handle image upload and preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Item Submission Page</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 shadow-lg rounded-lg">
        {/* Item Name Input */}
        <Input
          label="Item Name"
          type="text"
          placeholder="Enter item name"
          {...register('itemName', { required: 'Item name is required' })}
          error={errors.itemName?.message}
        />

        {/* Item Description Input */}
        <Input
          label="Item Description"
          type="textarea"
          placeholder="Enter item description"
          {...register('itemDescription', { required: 'Description is required' })}
          error={errors.itemDescription?.message}
        />

        {/* Image Upload Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            {...register('itemImage', { required: 'Image is required' })}
            className="mt-1 block w-full text-gray-500"
            onChange={handleImageUpload}
          />
          {errors.itemImage && <p className="text-red-500 text-sm">{errors.itemImage.message}</p>}
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-4">
            <p className="text-gray-600">Image Preview:</p>
            <img src={imagePreview} alt="Item Preview" className="mt-2 h-40 object-cover rounded-md shadow-md" />
          </div>
        )}

        {/* Submit Button */}
        <Button type="submit" text="Submit Item" disabled={isSubmitting} />
      </form>
    </div>
  );
};

export default ItemSubmissionPage;
