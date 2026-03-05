import React, { useState, useRef } from 'react';
import '../styles/TryOn.css';

const TryOnPage = ({ onProfileUpdate }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [bodyMetrics, setBodyMetrics] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const analyzeBody = async () => {
    if (!uploadedImage) {
      alert('Please upload an image first');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: uploadedImage }),
      });

      const data = await response.json();
      setBodyMetrics(data);
      onProfileUpdate(data);
    } catch (error) {
      console.error('Error analyzing body:', error);
      alert('Backend not running. Start with: npm run dev on port 5000');
    } finally {
      setLoading(false);
    }
  };

  const tryOnClothing = async (clothingType) => {
    if (!uploadedImage) return;
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/tryon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: uploadedImage, clothingType }),
      });
      const data = await response.json();
      if (data.tryon_image) {
        setUploadedImage(data.tryon_image);
      }
    } catch (error) {
      console.error('Error trying on clothing:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tryon-page">
      <h2>👕 Virtual Try-On</h2>
      <p className="localhost-notice">Running on: <strong>localhost:5173</strong> | Backend: <strong>localhost:5000</strong></p>
      
      <div className="tryon-container">
        <div className="upload-section">
          <button onClick={() => fileInputRef.current?.click()} className="upload-btn">
            📏 Upload Photo
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>

        {uploadedImage && (
          <div className="image-section">
            <img src={uploadedImage} alt="Uploaded" className="preview-image" />
          </div>
        )}

        {bodyMetrics && (
          <div className="metrics-panel">
            <h3>📊 Body Analysis</h3>
            <div className="metric-grid">
              <div className="metric-item">
                <label>Height</label>
                <span>{bodyMetrics.height_cm}cm</span>
              </div>
              <div className="metric-item">
                <label>Chest</label>
                <span>{bodyMetrics.chest_cm}cm</span>
              </div>
              <div className="metric-item">
                <label>Waist</label>
                <span>{bodyMetrics.waist_cm}cm</span>
              </div>
              <div className="metric-item">
                <label>Body Shape</label>
                <span>{bodyMetrics.body_shape}</span>
              </div>
              <div className="metric-item">
                <label>Skin Tone</label>
                <span style={{ color: '#D4A574' }}>● {bodyMetrics.skin_tone}</span>
              </div>
            </div>
          </div>
        )}

        <div className="buttons-section">
          <button onClick={analyzeBody} disabled={loading} className="action-btn primary">
            {loading ? 'Analyzing...' : '🔍 Analyze Body'}
          </button>
          {bodyMetrics && (
            <>
              <button onClick={() => tryOnClothing('shirt')} disabled={loading} className="action-btn">
                👘 Try Shirt
              </button>
              <button onClick={() => tryOnClothing('pants')} disabled={loading} className="action-btn">
                🢶 Try Pants
              </button>
              <button onClick={() => tryOnClothing('dress')} disabled={loading} className="action-btn">
                👗 Try Dress
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TryOnPage;
