import { useState } from 'react'

function Dashboard() {
  const [models] = useState(() => {
    return JSON.parse(localStorage.getItem('models')) || []
  })

  const totalModels = models.length

  const completedModels = models.filter(
    (model) => model.status === 'Completed'
  ).length

  const averageAccuracy =
    totalModels === 0
      ? 0
      : (
          models.reduce(
            (total, model) =>
              total + Number(model.accuracy || 0),
            0
          ) / totalModels
        ).toFixed(2)

  return (
    <div className="container py-5">

      <div className="mb-5">
        <h1 className="fw-bold">
          AI Model Manager
        </h1>

        <p className="text-muted">
          Manage and track your artificial intelligence models.
        </p>
      </div>

      <div className="row g-4">

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <p className="text-muted mb-2">
                Total Models
              </p>

              <h2 className="fw-bold mb-0">
                {totalModels}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <p className="text-muted mb-2">
                Completed Models
              </p>

              <h2 className="fw-bold text-success mb-0">
                {completedModels}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <p className="text-muted mb-2">
                Average Accuracy
              </p>

              <h2 className="fw-bold text-primary mb-0">
                %{averageAccuracy}
              </h2>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-5">
        <h3 className="fw-bold mb-3">
          About the Project
        </h3>

        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <p className="mb-0">
              AI Model Manager is a frontend application
              developed with React and Bootstrap. It allows
              users to add, view, update and delete AI model
              information using browser LocalStorage.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard