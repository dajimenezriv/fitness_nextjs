export async function getProfile(accessToken?: string) {
  const res = await fetch(`https://api.github.com/user`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${accessToken}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  const data = await res.json();
  return data;
}
