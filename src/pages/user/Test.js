import React, { useState } from 'react';

function Test() {
    const initialData = {
        field1: "Text 1",
        field2: "Text 2",
        field3: "Text 3"
    }; // Dữ liệu ban đầu của đối tượng

    const [data, setData] = useState(initialData);
    const [editableField, setEditableField] = useState(null);

    const handleDoubleClick = (field) => {
        setEditableField(field);
    };

    const handleChange = (e, field) => {
        const newData = { ...data, [field]: e.target.value };
        setData(newData);
    };

    const handleBlur = () => {
        setEditableField(null);
    };

    return (
        <div>
            {Object.entries(data).map(([field, text]) => (
                <div key={field}>
                    {editableField === field ? (
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => handleChange(e, field)}
                            onBlur={handleBlur}
                        />
                    ) : (
                        <p onDoubleClick={() => handleDoubleClick(field)}>{text}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Test;
