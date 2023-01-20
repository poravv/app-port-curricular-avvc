
import MyCard from './card/MyCard';

function Conocimientos() {

    const listaConocimientos = [

        {
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
            titulo: "Base de datos",
            lista: `Oracle 
            MySQL 
            SQLServer 
            Postgresql 
            Firebase
            Sqlite`
        },
        {
            titulo: "Sistemas Operativos",
            lista: `Windows XP, Vista, 7, 8, 10, 11
            Linux CentOs, Ubuntu, Mandriva,openSuse`
        },
        {
            titulo: "Herramientas de oficina",
            lista: `- Word, Excel, PowerPoint, Access
            - Writer, Calc, Impres, Base
            - Google docs, Google sheets, 
            Google slides, Google form`
        },
        {
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

    return (
        <>
            <section>
                <h1 style={{ display: `flex`, justifyContent: `center`,margin:`30px` }}>Conocimientos</h1>
                <div style={{ flexWrap: `wrap`, display: `flex`, justifyContent: `center` }}>
                    {
                        listaConocimientos.map((conocimientos) => {
                            return <MyCard titulo={conocimientos.titulo} lista={conocimientos.lista} />
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default Conocimientos;