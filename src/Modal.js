export default function modal() {
  return (
    <>
      <button
        className="btn btn-warning m-1"
        data-bs-toggle="modal"
        data-bs-target="#add"
      >
        Add Volunteers
      </button>
      <div
        class="modal fade"
        id="add"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Volunteers
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="volunteer list" class="col-form-label">
                    Please enter volunteers' rollnumbers
                  </label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}