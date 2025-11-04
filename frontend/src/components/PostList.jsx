import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../redux/postSlice";

export default function PostList() {
  const dispatch = useDispatch();
  const { items, filter } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filtered = items.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul style={styles.list}>
      {filtered.map((p) => (
        <li key={p.id} style={styles.item}>
          <div>
            <strong>{p.name}</strong>
            <p>{p.description}</p>
          </div>
          <button onClick={() => dispatch(deletePost(p.id))} style={styles.delete}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    borderBottom: "1px solid #ddd",
  },
  delete: {
    background: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "4px 8px",
  },
};
