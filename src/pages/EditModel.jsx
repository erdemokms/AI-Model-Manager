import { useState } from 'react'

function EditModel({ model, onUpdate, onCancel }) {
  const [updatedModel, setUpdatedModel] = useState(model)

  const handleChange = (event) => {
    const { name, value } = event.target

    setUpdatedModel({
      ...updatedModel,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    onUpdate(updatedModel)
  }

  return (
    <main className="form-page">

      <section className="form-header">
        <div>
          <span className="page-eyebrow">
            MODEL WORKSPACE
          </span>

          <h1>Edit AI Model</h1>

          <p>
            Update the information and performance
            metrics of your machine learning model.
          </p>
        </div>

        <div className="form-header-icon">
          ✎
        </div>
      </section>

      <form
        className="model-form"
        onSubmit={handleSubmit}
      >

        {/* Model Information */}

        <section className="form-section">

          <div className="form-section-heading">
            <div className="form-section-number">
              01
            </div>

            <div>
              <h2>Model Information</h2>
              <p>
                Basic information about your model.
              </p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-field form-field-wide">
              <label>
                Model Name
                <span>*</span>
              </label>

              <input
                type="text"
                name="name"
                value={updatedModel.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label>
                Dataset
                <span>*</span>
              </label>

              <input
                type="text"
                name="dataset"
                value={updatedModel.dataset}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label>
                Framework
                <span>*</span>
              </label>

              <select
                name="framework"
                value={updatedModel.framework}
                onChange={handleChange}
              >
                <option value="PyTorch">
                  PyTorch
                </option>

                <option value="TensorFlow">
                  TensorFlow
                </option>

                <option value="Keras">
                  Keras
                </option>

                <option value="Scikit-learn">
                  Scikit-learn
                </option>
              </select>
            </div>

          </div>

        </section>

        {/* Performance Metrics */}

        <section className="form-section">

          <div className="form-section-heading">
            <div className="form-section-number">
              02
            </div>

            <div>
              <h2>Performance Metrics</h2>
              <p>
                Update the model's training performance.
              </p>
            </div>
          </div>

          <div className="metric-form-grid">

            <div className="metric-field">
              <label>
                Accuracy
                <span>*</span>
              </label>

              <div className="metric-input">
                <input
                  type="number"
                  step="0.01"
                  name="accuracy"
                  value={updatedModel.accuracy}
                  onChange={handleChange}
                />

                <span>%</span>
              </div>
            </div>

            <div className="metric-field">
              <label>
                F1 Score
                <span>*</span>
              </label>

              <input
                type="number"
                step="0.0001"
                name="f1Score"
                value={updatedModel.f1Score}
                onChange={handleChange}
              />
            </div>

            <div className="metric-field">
              <label>
                Epochs
                <span>*</span>
              </label>

              <input
                type="number"
                name="epochs"
                value={updatedModel.epochs}
                onChange={handleChange}
              />
            </div>

          </div>

        </section>

        {/* Additional Information */}

        <section className="form-section">

          <div className="form-section-heading">
            <div className="form-section-number">
              03
            </div>

            <div>
              <h2>Additional Information</h2>
              <p>
                Update status and additional notes.
              </p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-field">
              <label>
                Status
                <span>*</span>
              </label>

              <select
                name="status"
                value={updatedModel.status}
                onChange={handleChange}
              >
                <option value="Completed">
                  Completed
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Planned">
                  Planned
                </option>
              </select>
            </div>

            <div className="form-field form-field-wide">
              <label>
                Description
              </label>

              <textarea
                name="description"
                value={updatedModel.description || ''}
                onChange={handleChange}
                rows="4"
                placeholder="Add notes about the model..."
              />
            </div>

          </div>

        </section>

        {/* Actions */}

        <div className="form-actions">

          <p>
            <span>*</span> Required fields
          </p>

          <div className="edit-form-buttons">

            <button
              type="button"
              className="secondary-form-button"
              onClick={onCancel}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="primary-form-button"
            >
              <span>✓</span>
              Update Model
            </button>

          </div>

        </div>

      </form>

    </main>
  )
}

export default EditModel