type SidebarProps = {
  completed: number;
  incompleted: number;
};

export function Sidebar({ completed, incompleted }: SidebarProps) {
  return (
    <div className="sidebar flex-shrink-0 bg-body-secondary bg-opacity-50 p-4">
			<p className="head fs-6 fw-bold border-bottom border-secondary pb-2 mb-3">タスク数</p>
      <div className="count_box d-flex flex-column gap-3">
        <div className="inbox d-flex align-items-baseline gap-2">
          <div className="icon lh-1 flex-shrink-0 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
            </svg>
          </div>
          <p className="text fs-6 fw-bold lh-1">
            完了：
            <span className="num d-inline-block fs-4 text-primary me-1">{completed}</span>
            件
          </p>
        </div>
        <div className="inbox d-flex align-items-baseline gap-2">
          <div className="icon lh-1 flex-shrink-0 text-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
            </svg>
          </div>
          <p className="text fs-6 fw-bold lh-1">
            未完了：
            <span className="num d-inline-block fs-4 text-danger me-1">{incompleted}</span>
            件
          </p>
        </div>
      </div>
    </div>
  );
}
