const ResponseText = data => {
    return (
        <div>
            <span>{data.name}</span>
            <br></br>
            <span>{data.surname}</span>
            <ul>
                {data.loop && data.loop.length > 0 &&
                data.loop.map(item => (
                    <li>{item.id}</li>
                ))
                }
            </ul>
        </div>
    );
};

function AppProps(){
    const data = {
        name: 'Lorem',
        surname: 'Ipsum',
        loop: [
            {
                id: 0
            },
            {
                id: 1,
            },
            {
                id: 3,
            }
        ]
    };

    return <ResponseText {...data} />;
}

export default AppProps;