export default function SkillsTable (){
    return(
        <div className="overflow-y-auto bg-neutral-primary-soft shadow-xs rounded-base border border-dashed max-h-50 max-w-full">
            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-neutral-secondary-soft border-b border-dashed rounded-base ">
                    <tr>
                        <th scope="col" className="px-6 py-2 font-medium">
                            Python
                        </th>
                        <th scope="col" className="px-4 py-2 font-medium">
                            PostgreSQL
                        </th>
                        <th scope="col" className="px-6 py-2 font-medium">
                            Javascript
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-neutral-primary border-b border-dashed">
                        <th scope="row" className="px-6 py-2 font-medium text-heading whitespace-nowrap">
                            Typescript
                        </th>
                        <td className="px-6 py-2">
                            Next.js
                        </td>
                        <td className="px-6 py-2">
                            Github
                        </td>
                    </tr>
                    <tr className="bg-neutral-primary border-b border-dashed">
                        <th scope="row" className="px-6 py-2 font-medium text-heading whitespace-nowrap">
                            React
                        </th>
                        <td className="px-6 py-2">
                            CSS 
                        </td>
                        <td className="px-6 py-2">
                            C
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}