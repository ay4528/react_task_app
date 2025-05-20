import { Task } from '../types/type';

type TaskListProps = {
  tasks: Task[];
  onStatusChange: (index: number, completed: boolean) => void;
};

export function TaskList({ tasks, onStatusChange }: TaskListProps) {
  return (
    <div className="task_list">
      <div className="table-responsive">
        <table className="table m-0" style={{ minWidth: '650px' }}>
          <thead>
            <tr>
              <th className="w-25">タイトル</th>
              <th>説明</th>
              <th className="w-25">状態</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => {
              const selectClass = task.completed ? 'complete' : 'incomplete';
              return (
                <tr key={index}>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <select
                      className={`form-select w-auto ${selectClass}`}
                      value={task.completed ? '完了' : '未完了'}
                      onChange={(e) =>
                        onStatusChange(index, e.target.value === '完了')
                      }
                    >
                      <option>未完了</option>
                      <option>完了</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
