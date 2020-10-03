class Subject{
    constructor(SubjectID, SubjectName, SubjectColour/*possibly add array to do to for todo list*/)
    {
        this.SubjectID = SubjectID;
        this.SubjectName = SubjectName;
        this.SubjectColour = SubjectColour;
    }
    get ID()
    {
        return this.ID;
    }
    set ID (inSID)
    {
        this.SubjectID = inSID;
    }
    get SubName()
    {
        return this.SubjectName;
    }
    set SubName(inSubName)
    {
        this.SubName = inSubName;
    }
    get colour()
    {
        return this.colour;
    }
    set colour(inCol)
    {
        this.SubjectColour = inCol;
    }
}
