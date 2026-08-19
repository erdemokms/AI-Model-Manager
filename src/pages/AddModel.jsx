import { useState } from 'react'

function AddModel() {
  const [model, setModel] = useState({
    name: '',
    dataset: '',
    framework: '',
    accuracy: '',
    f1Score: '',
    epochs: '',
    status: '',
    description: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setModel({
      ...model,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !model.name ||
      !model.dataset ||
      !model.framework ||
      !model.accuracy ||
      !model.f1Score ||
      !model.epochs ||
      !model.status
    ) {
      alert('Please fill in all required fields.')
      return
    }

    const existingModels =
      JSON.parse(localStorage.getItem('models')) || []

    const newModel = {
      ...model,
      id: Date.now()
    }

    const updatedModels = [
      ...existingModels,
      newModel
    ]

    localStorage.setItem(
      'models',
      JSON.stringify(updatedModels)
    )

    alert('Model added successfully!')

    setModel({
      name: '',
      dataset: '',
      framework: '',
      accuracy: '',
      f1Score: '',
      epochs: '',
      status: '',
      description: ''
    })
  }

  return (
    <main className="form-page">

      <section className="form-header">
        <div>
          <span className="page-eyebrow">
            MODEL WORKSPACE
          </span>

          <h1>Add AI Model</h1>

          <p>
            Register a new machine learning model
            and keep its performance metrics organized.
          </p>
        </div>

        <div className="form-header-icon">
          +
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
                value={model.name}
                onChange={handleChange}
                placeholder="e.g. ResNet50"
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
                value={model.dataset}
                onChange={handleChange}
                placeholder="e.g. HAM10000"
              />
            </div>

            <div className="form-field">
              <label>
                Framework
                <span>*</span>
              </label>

              <select
                name="framework"
                value={model.framework}
                onChange={handleChange}
              >
                <option value="">
                  Select framework
                </option>

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

        {/* Performance */}

        <section className="form-section">

          <div className="form-section-heading">
            <div className="form-section-number">
              02
            </div>

            <div>
              <h2>Performance Metrics</h2>
              <p>
                Record the model's training performance.
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
                  value={model.accuracy}
                  onChange={handleChange}
                  placeholder="88.72"
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
                value={model.f1Score}
                onChange={handleChange}
                placeholder="0.8845"
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
                value={model.epochs}
                onChange={handleChange}
                placeholder="30"
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
                Add status and optional notes.
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
                value={model.status}
                onChange={handleChange}
              >
                <option value="">
                  Select status
                </option>

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
                value={model.description}
                onChange={handleChange}
                rows="4"
                placeholder="Add notes about the model, training process or experiment..."
              />
            </div>

          </div>

        </section>

        {/* Actions */}

        <div className="form-actions">

          <p>
            <span>*</span> Required fields
          </p>

          <button
            type="submit"
            className="primary-form-button"
          >
            <span>+</span>
            Add Model
          </button>

        </div>

      </form>

    </main>
  )
}

export default AddModel