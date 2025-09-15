'use client';
export default function FilterError({error}) {
    return (
        <div id="error">
            <h1>an error accourd</h1>
            <p>{error.message} . please try again later</p>
        </div>
    );

}