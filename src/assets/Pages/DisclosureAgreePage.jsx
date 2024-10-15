import  { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import axios from 'axios';

const DisclosureAgreementPage = () => {
    const [agreementAccepted, setAgreementAccepted] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const sigCanvas = useRef({});

    // Clear the signature pad
    const clearSignature = () => {
        sigCanvas.current.clear();
    };

    // Submit the signed agreement
    const handleSubmit = async () => {
        if (sigCanvas.current.isEmpty()) {
            setMessage('Please provide your signature before submitting.');
            return;
        }

        setMessage('');
        setLoading(true);
        const signatureImage = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');

        try {
            // Send the signature to the backend API
            await axios.post('/api/agreement/signature', { signature: signatureImage });
            setMessage('Agreement submitted successfully!');
            clearSignature();
        } catch (error) {
            console.error('Error submitting agreement:', error);
            setMessage('Failed to submit agreement.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                {loading && <p>Loading...</p>}
                {message && <p className="text-red-500">{message}</p>}

                <h2 className="text-2xl font-semibold mb-4">Disclosure Agreement</h2>
                <p className="mb-4">
                    Please read the following disclosure agreement carefully. By providing your digital signature, you agree to the terms outlined.
                </p>

                <div className="border p-4 mb-4">
                    <p>[Insert your disclosure agreement content here]</p>
                </div>

                <div className="mb-4">
                    <SignatureCanvas
                        ref={sigCanvas}
                        penColor="black"
                        canvasProps={{ className: 'signatureCanvas w-full h-40 border border-gray-300' }}
                    />
                    <div className="mt-2 flex space-x-4">
                        <button
                            onClick={clearSignature}
                            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                        >
                            Clear
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                        >
                            Submit Signature
                        </button>
                    </div>
                </div>

                <div className="flex items-center mt-4">
                    <input
                        type="checkbox"
                        checked={agreementAccepted}
                        onChange={() => setAgreementAccepted(!agreementAccepted)}
                        className="mr-2"
                    />
                    <label>I accept the terms and conditions of the disclosure agreement.</label>
                </div>

                <div className="mt-4">
                    <button
                        onClick={handleSubmit}
                        disabled={!agreementAccepted}
                        className={`${
                            agreementAccepted ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
                        } text-white py-2 px-4 rounded`}
                    >
                        Submit Agreement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DisclosureAgreementPage;
