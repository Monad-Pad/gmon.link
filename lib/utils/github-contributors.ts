import { Octokit } from "@octokit/core";

export async function getGithubContributors() {
	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN,
	});
	const result = await octokit.request("GET /repos/Monad-Pad/gmon.link/contributors", {
		owner: "OWNER",
		repo: "REPO",
		headers: {
			"X-GitHub-Api-Version": "2022-11-28",
		},
	});

	return result.data;
}