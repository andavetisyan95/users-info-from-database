import React from 'react';
import { useParams } from 'react-router';

export default function Albums() {

    const { userId } = useParams()

    return (
        <div>{ userId } user : Albums</div>
    )
}
