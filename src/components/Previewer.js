import Header from "./Header";

function Previewer({ markdown }) {
    return <div id="previewer">
        <Header name="Previewer" />
        <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>;
}

export default Previewer;