
type Props = {
    price : number;
    children : React.ReactNode;
}

const TestChildren = ( {price, children} : Props) => {
    return (
        <>
        {children}
        <h1>Teste = {price}</h1>
        {children}
        </>
    );
}

export default TestChildren;