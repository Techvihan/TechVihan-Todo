function CheckBox(props: any) {
  return (
    <div className="flex items-center py-2">
      <input
        checked={props.checked}
        onChange={props.onChange}
        type="checkbox"
        className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
      />
    </div>
  );
}
export default CheckBox;
