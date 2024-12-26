export const Regular = ({items, sourceName, ItemComponent}) => {
    return (
        <>
        {items.map((item, i) => <ItemComponent key={i} {...{[sourceName]: item}}/>)}
        </>
    )
}