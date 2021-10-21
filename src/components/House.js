import React from 'react'
import { Button } from 'react-bootstrap'
import { Popover } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'

function House({ house }) {

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">More information about {house.name}.</Popover.Header>
          <Popover.Body>
            <strong>Region:</strong> <p>{house.region}</p>
            <strong>Coat of Arms:</strong> <p>{house.coatOfArms === '' ? "No data available" : house.coatOfArms}</p>
            <strong>Words:</strong> <p>{house.words === '' ? "No data available" : house.words}</p>
            <strong>Seat:</strong> <p>{house.seats[0] === '' ? "No data available" : house.seats[0]}</p>
          </Popover.Body>
        </Popover>
      );

    return (
        <>
            <tr>
                <td>{house.name}</td>
                <td>
                    <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
                        <Button variant="success">Details</Button>
                    </OverlayTrigger>
                </td>
            </tr>
        </>
    )
}

export default House
