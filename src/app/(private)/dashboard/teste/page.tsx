import { formAction } from "./actions"
import Form from 'next/form';

export default async function Page() {
    return (
        <div>
            <Form action={formAction}>
                <p>Nome</p>
                <input className="bg-gray-200" name="name" />
                <p>Idade</p>
                <input className="bg-gray-200" name="age" />
                <p>Email</p>
                <input className="bg-gray-200" name="email" />
                <br />
                <button className="bg-red-200" type="submit">Enviar</button>
            </Form>
        </div>
    )
}