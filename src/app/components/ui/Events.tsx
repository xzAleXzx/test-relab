import React, {useState} from 'react';
import EventsTable from './EventsTable';
import moment from "moment/moment";


type DataTypes = {
    ctime: number;
    event: string;
}

const socket = new WebSocket('wss://test.relabs.ru/event');

const Events: React.FC = () => {
    const [data, setData] = useState<DataTypes[]>([]);

    React.useEffect(() => {
        socket.onmessage = (event: any ) => {
            const parseData = JSON.parse(event.data);
            const convertTime = moment.unix(parseData.ctime).format('DD.MM.YYYY HH:mm');
            setData((prevData) => [...prevData, {...parseData, ctime: convertTime}]);
        };
    }, [data]);

    React.useEffect(() => {
        if (data.length === 10 ) {
            return socket.close();
        }
    }, [data]);

    return (
        <div className="container d-flex flex-column align-items-center w-50">
            <div className="h2 mt-3">События</div>
            {data.length > 0 ? (
                <>
                    <EventsTable comingEvents={data}/>
                </>
            ) : (
                <div className="mt-3">
                    <h3 className="text-center">Загрузка...</h3>
                </div>
            )}
        </div>
    )
}

export default Events;