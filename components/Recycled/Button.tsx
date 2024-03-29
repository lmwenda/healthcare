function Button (props: any) {
  return(
      <button className="p-3 bg-blue-500 text-white font-bold rounded md:mx-auto" 
      onClick={props.onClick}>
        { props.children }
      </button>
  );
}

export default Button;
