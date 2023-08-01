import { useState } from 'react';
import MyCard from '../componentes/card/MyCard';
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const listaConocimientos = [
    {
        id: "1",
        titulo: "Lenguajes de Programación",
        lista: `Visual Fox Pro 9 - Básico 
        PHP 
        Dart - Flutter 
        Node Js - JavaScript y React
        Java Descktop 
        Java Web JSP 
        Java WEB JSF`
    },
    {
        id: "2",
        titulo: "Base de datos",
        lista: `Oracle 
        MySQL 
        SQLServer 
        Postgresql 
        Firebase
        Sqlite`
    },
    {
        id: "3",
        titulo: "Sistemas Operativos",
        lista: `Windows XP, Vista, 7, 8, 10, 11
        Linux CentOs, Ubuntu, Mandriva,openSuse`
    },
    {
        id: "4",
        titulo: "Herramientas de oficina",
        lista: `- Word, Excel, PowerPoint, Access
        - Writer, Calc, Impres, Base
        - Google docs, Google sheets, 
        Google slides, Google form`
    },
    {
        id: "5",
        titulo: "Herramientas utilizadas",
        lista: `Notepad++
        Vi(Editor de Texto Linux) 
        SQLTools 
        WinSql 
        PGAdmin 
        PLSQL
        MySQL Workbench`
    },
    {
        id: "6",
        titulo: "Otros",
        lista: `ERwin Data Modeler 
        Total Commander 
        DBDesigner 4
        Putty
        Git
        Bootstrap
        Macromedia 
        Dreamweaver 
        StaUML 
        BlueJ
        jEdit`
    },
];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


function Conocimientos() {
    const [tasks, setTasks] = useState(listaConocimientos);
    return (
        <>
            <section>
                <h1 style={{ display: `flex`, justifyContent: `center`, margin: `30px` }}>Conocimientos</h1>
                <div >
                    <DragDropContext
                        onDragEnd={(result) => {
                            const { source, destination } = result;
                            if (!destination) {
                                return;
                            }
                            if (
                                source.index === destination.index &&
                                source.droppableId === destination.droppableId
                            ) {
                                return;
                            }

                            setTasks((prevTasks) =>
                                reorder(prevTasks, source.index, destination.index)
                            );
                        }}
                    >
                            <Droppable droppableId="tasks">
                                {(droppableProvided) => (
                                    <div
                                        {...droppableProvided.droppableProps}
                                        ref={droppableProvided.innerRef}
                                        style={{ flexWrap: `wrap`, display: `flex`, justifyContent: `center` }}
                                    >
                                        {tasks.map((task, index) => (
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(draggableProvided) => (
                                                    <div
                                                        {...draggableProvided.draggableProps}
                                                        ref={draggableProvided.innerRef}
                                                        {...draggableProvided.dragHandleProps}
                                                    >
                                                        <MyCard titulo={task.titulo} lista={task.lista} color={(index%2===0?'#E1E9FC':'#E7FCE1')} />
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {droppableProvided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                    </DragDropContext>
                </div>
            </section>
        </>
    );
}

export default Conocimientos;