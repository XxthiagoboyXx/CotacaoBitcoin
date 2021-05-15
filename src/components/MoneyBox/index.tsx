import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

type buttonType = {
    name: string,
}

export function MoneyBox({ name }: buttonType) {
    return (
        <Button variant="warning" size="lg" >{name}</Button>
    );
}

