import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Item1 from "../Pages/Item1.tsx";
import Item2 from "../Pages/Item2.tsx";

const MypageContent: React.FC = () => {
    return <>
        <div>
            <Routes>
                <Route path="/item1" element={<Item1 />} />
                <Route path="/item2" element={<Item2 />} />
            </Routes>
        </div>
    </>
}

export default MypageContent;