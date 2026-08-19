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
    <div className="container py-5">

      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div className="mb-4">
            <h1 className="fw-bold">
              Edit AI Model
            </h1>

            <p className="text-muted">
              Update the information of your AI model.
            </p>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">

              <form onSubmit={handleSubmit}>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Model Name
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    value={updatedModel.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Dataset
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="dataset"
                    value={updatedModel.dataset}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Framework
                  </label>

                  <select
                    className="form-select"
                    name="framework"
                    value={updatedModel.framework}
                    onChange={handleChange}
                  >
                    <option value="PyTorch">PyTorch</option>
                    <option value="TensorFlow">TensorFlow</option>
                    <option value="Keras">Keras</option>
                    <option value="Scikit-learn">
                      Scikit-learn
                    </option>
                  </select>
                </div>

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
                      value={updatedModel.accuracy}
                      onChange={handleChange}
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
                      value={updatedModel.f1Score}
                      onChange={handleChange}
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
                      value={updatedModel.epochs}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Status
                  </label>

                  <select
                    className="form-select"
                    name="status"
                    value={updatedModel.status}
                    onChange={handleChange}
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Progress">
                      In Progress
                    </option>
                    <option value="Planned">Planned</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Description
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    name="description"
                    value={updatedModel.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="d-flex gap-2">

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg flex-grow-1"
                  >
                    Update Model
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary btn-lg"
                    onClick={onCancel}
                  >
                    Cancel
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

export default EditModel