import Container from "ui/Container";
import { Task } from "components/Task";
import { CreateTaskForm } from "components/CreateTaskForm";

export const Home = () => {
  const mock = [
    {
      id: 1,
      title: "Test",
      username: "Andrew",
      email: "test@123",
      description: "Lorem ipsum dolor sit amet,",
      status: "pending",
    },
    {
      id: 2,
      title: "Test",
      username: "Andrew",
      email: "test@123",
      description: "Lorem ipsum dolor sit amet,",
      status: "pending",
    },
    {
      id: 3,
      title: "Test",
      username: "Andrew",
      email: "test@123",
      description: "Lorem ipsum dolor sit amet,",
      status: "pending",
    },
  ];

  return (
    <Container>
      <CreateTaskForm />
      {mock.map(({ id, title, username, description, status, email }) => (
        <Task key={id} username={username} description={description} status={status} email={email} />
      ))}
    </Container>
  );
};
