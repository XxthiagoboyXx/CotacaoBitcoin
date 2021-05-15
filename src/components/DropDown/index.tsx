import 'bootstrap/dist/css/bootstrap.css';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

type buttonType = {
    name: string,
}

export function DropDown({ name }: buttonType) {
    return (
        <DropdownButton
            as={ButtonGroup}
            key={'Warning'}
            id={'Warning'}
            variant={'Warning'.toLowerCase()}
            title={name}
        >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3" active>
                Active Item
        </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
    );
}

