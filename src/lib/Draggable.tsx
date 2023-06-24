import { useDraggable } from "@dnd-kit/core";

import { CSS } from "@dnd-kit/utilities";

export function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.children}
    </button>
  );
}
