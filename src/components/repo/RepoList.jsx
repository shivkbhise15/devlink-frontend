import RepoCard from "./RepoCard";

function RepoList({ repos = [], onSave, savingId }) {
  if (!Array.isArray(repos)) {
    console.error("RepoList expected array, got:", repos);
    return null; // fail gracefully
  }

  return repos.map((repo) => (
    <RepoCard
      key={repo.id}
      repo={repo}
      onSave={onSave}
      saving={savingId === repo.id}
    />
  ));
}

export default RepoList;
