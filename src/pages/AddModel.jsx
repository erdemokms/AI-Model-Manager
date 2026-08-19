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
    <div className="container py-5">

      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div className="mb-4">
            <h1 className="fw-bold">
              Add AI Model
            </h1>

            <p className="text-muted">
              Add a new artificial intelligence model to your manager.
            </p>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">

              <form onSubmit={handleSubmit}>

                {/* Model Name */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Model Name
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    value={model.name}
                    onChange={handleChange}
                    placeholder="e.g. ResNet50"
                  />
                </div>

                {/* Dataset */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Dataset
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="dataset"
                    value={model.dataset}
                    onChange={handleChange}
                    placeholder="e.g. HAM10000"
                  />
                </div>

                {/* Framework */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Framework
                  </label>

                  <select
                    className="form-select"
                    name="framework"
                    value={model.framework}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select Framework
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

                {/* Metrics */}
                <div className="row">

                  <div className="col-md-4 mb-4">
                    <label className="form-label fw-semibold">
                      Accuracy (%)
                    </label>

                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      name="accuracy"
                      value={model.accuracy}
                      onChange={handleChange}
                      placeholder="88.72"
                    />
                  </div>

                  <div className="col-md-4 mb-4">
                    <label className="form-label fw-semibold">
                      F1 Score
                    </label>

                    <input
                      type="number"
                      step="0.0001"
                      className="form-control"
                      name="f1Score"
                      value={model.f1Score}
                      onChange={handleChange}
                      placeholder="0.8845"
                    />
                  </div>

                  <div className="col-md-4 mb-4">
                    <label className="form-label fw-semibold">
                      Epochs
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      name="epochs"
                      value={model.epochs}
                      onChange={handleChange}
                      placeholder="30"
                    />
                  </div>

                </div>

                {/* Status */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Status
                  </label>

                  <select
                    className="form-select"
                    name="status"
                    value={model.status}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select Status
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

                {/* Description */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Description
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    name="description"
                    value={model.description}
                    onChange={handleChange}
                    placeholder="Describe your model..."
                  />
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                  >
                    + Add Model
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default AddModel