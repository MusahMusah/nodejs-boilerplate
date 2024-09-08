import layoutTemplate from "../layout/layout.template";

module.exports = (
    data:string,
) =>
{
    return layoutTemplate(`
        <div style="background-color: #f5f5f5; padding: 20px; font-family: 'Roboto', sans-serif;">
            Test message: ${data}
        </div>
    `);
}
