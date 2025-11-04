import { useDispatch } from "react-redux";
import { setFilter } from "../redux/postSlice";

export default function PostFilter() {
  const dispatch = useDispatch();

  return (
    <input
      onChange={(e) => dispatch(setFilter(e.target.value))}
      placeholder="Filtrar por nombre..."
      style={{
        width: "100%",
        padding: "8px",
        marginBottom: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    />
  );
}
