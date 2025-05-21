import React, { useState } from 'react';
import { Task } from '../types/type';

type addTaskProps = {
  onAdd: (task: Task) => void;
};

export function TaskForm({ onAdd }: addTaskProps) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ title, description, completed: false, dueDate, category });
    setTitle('');
    setDescription('');
    setDueDate('');
    setCategory('');
  };

  return (
    <div className="form_box mb-4">
      <form
        className="form bg-body-secondary bg-opacity-50 p-4"
        onSubmit={handleSubmit}
      >
        <div className="item mb-4">
          <p className="head fs-6 fw-bold mb-2">タイトル</p>
          <input
            type="text"
            value={title}
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="item mb-4">
          <p className="head fs-6 fw-bold mb-2">説明</p>
          <textarea
            value={description}
            className="form-control"
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="d-flex align-item-center gap-3 mb-4">
          <div className="inbox">
            <p className="head fs-6 fw-bold mb-2">期限</p>
            <input
              type="date"
              value={dueDate}
              className="form-control"
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="inbox">
            <p className="head fs-6 fw-bold mb-2">カテゴリー</p>
            <select className="form-select w-auto" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="仕事">仕事</option>
              <option value="趣味">趣味</option>
              <option value="その他">その他</option>
            </select>
          </div>
        </div>
        <div className="submit">
          <button type="submit" className="btn btn-primary">
            追加する
          </button>
        </div>
      </form>
    </div>
  );
}
