class DynamicElements
{
    

    /**
     * Function to create tr tag.
     */
    static createTableRow()
    {
        let tr = document.createElement('tr');
        return tr;
    }

    /**
     * Function to create th tag with innertext.
     * @param {*} value 
     */
    static createTableHeader(value)
    {
        let th = document.createElement('th');
        th.scope = "row";
        th.innerText = value;
        return th;
    }

    /**
     * Function to create td tag.
     */
    static createTableData()
    {
        let td = document.createElement('td');
        return td;
    }

}