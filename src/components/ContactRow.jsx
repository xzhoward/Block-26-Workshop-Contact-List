export default function ContactRow({ contact, setSelectedContactId }) {
    return (
      <tr
        onClick={() => setSelectedContactId(contact.id)}
        style={{ cursor: "pointer" }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
  