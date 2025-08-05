import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "../button/ActionButton";
export default function TableActions({ onView, onEdit, onDelete }) {
  return (
    <div className="flex gap-2">
      {onView && 
      <IconButton onClick={onView} title="View" icon={VisibilityIcon} color="blue" />
      }
      {onEdit && 
      <IconButton onClick={onEdit} title="Edit" icon={EditIcon} color="green" />
      }
      {onDelete && 
      <IconButton onClick={onDelete} title="Cancel" icon={DeleteIcon} color="red" />
      }
    </div>
  );
}
