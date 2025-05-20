import React, { useState } from 'react';
import { Task } from '../types/type';

type addTaskProps = {
  onAdd: (task: Task) => void;
};

export function TaskForm({ onAdd }: addTaskProps) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
    onAdd({ title, description, completed: false });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="form_box mb-4">
      <form className="form bg-body-secondary bg-opacity-50 p-4" onSubmit={handleSubmit}>
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
        <div className="submit">
          <button
            type="submit"
            className="btn btn-primary"
          >
            追加する
          </button>
        </div>
      </form>
    </div>
  );
}
