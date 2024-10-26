import React from 'react'
import ClassComponent from './pembahasan/classComponent'
import FunctionComponent from './pembahasan/functionalComponent'

class Komponen extends React.Component {
    render() {
        return (
            <div>
                <ClassComponent nama="name bosn"/>
                <FunctionComponent name="barakah jana"/>
            </div>
        )
    }
}

export default Komponen;