export const ChildH4Component = (
): JSX.Element => {
    console.log(ChildH4Component.name, ': Rendering...');

    return (
        <h4 className='py-3'>Children of Child Component</h4>
    );
}

export default ChildH4Component;