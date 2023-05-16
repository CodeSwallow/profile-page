export default async function handler(req, res) {
  try {
    const response = await fetch('https://qo8zfecxgd.execute-api.us-east-1.amazonaws.com/dev/projects');
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
