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
              <th className="text-nowrap w-25">タイトル</th>
              <th className="text-nowrap">説明</th>
              <th className="text-nowrap">カテゴリー</th>
              <th className="text-nowrap">期限</th>
              <th className="text-nowrap">状態</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => {
              const selectClass = task.completed ? 'complete' : 'incomplete';
              return (
                <tr key={index}>
                  <td className="align-middle">{task.title}</td>
                  <td className="align-middle">{task.description}</td>
                  <td className="align-middle">{task.category}</td>
                  <td className="text-nowrap align-middle">{task.dueDate}</td>
                  <td className="align-middle">
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
