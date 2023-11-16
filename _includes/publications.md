<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<h2 id="publications" style="margin: 2px 0px -15px;">Research Experiences</h2>
<div class="publications">
<ol class="bibliography">

<li>
<div class="pub-row">
  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    <img src="assets/img/PA.png" class="teaser img-fluid z-depth-1">
    <abbr class="badge">Under Review</abbr>
  </div>
  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
    <div class="title" style="color:#0073B1">Depressive Community Detection and Analysis</div>
    <div class="author"><strong>Yujia Wang</strong>, Haoran Yu</div>
    <div class="periodical"><em>Under Review</em></div>
    <div class="links">
      <a href="javascript:void(0);" class="btn btn-sm z-depth-0" id="toggleAbstract" role="button" style="font-size:12px;">Abstract</a>
      <div id="abstractContent" style="display:none;background-color: #f5ebe0; color: #003049; font-size: 0.9em; padding: 15px;">  <!--font-style: italic; -->
        Game theory and machine learning are two widely used techniques for predicting the outcomes of strategic interactions among humans. However, the game theory-based approach often relies on strong rationality and informational assumptions, while the machine learning-based approach typically requires the testing data to come from the same distribution as the training data. Our work studies how to integrate the two techniques to address these weaknesses. We focus on the interactions among real bidders in penny auctions, and develop a three-stage framework to predict the distributions of auction durations, which indicate the numbers of bids and auctioneer revenues. Specifically, we first leverage a pre-trained neural network to encode the descriptions of products in auctions into embeddings. Second, we apply game theory models to make preliminary predictions of auction durations. In particular, we tackle the challenge of accurately inferring parameters in game theory models. Third, we develop a Multi-Branch Mixture Density Network to learn the mapping from product embeddings and game-theoretic predictions to the distributions of actual auction durations. Experiments on real-world penny auction data demonstrate that our framework outperforms both game theory-based and machine learning-based prediction approaches.    
      </div>
  </div>
</div>
</li>
</ol>
</div>
- Developed a three-stage framework integrating game theory and machine learning to predict human behavior in strategic environments (e.g., auctions).
- This framework outperformed game theory-based approaches and machine learning-based approaches on synthetic and real data even when there exists a large domain shift.

<div class="publications">
<ol class="bibliography">

<li>
<div class="pub-row">

  <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
    <img src="assets/img/AFSBN.png" class="teaser img-fluid z-depth-1">
    <abbr class="badge">TCBB</abbr>
  </div>

  <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
    <div class="title" style="color:#0073B1">AFSBN: A method of artificial fish swarm optimizing bayesian network for epistasis detection</div>
    <div class="author">Liguang Wang#, <strong>Yujia Wang#</strong>, Yi Fu, Yunge Gao, Jiawei Du, Chen Yang, Jianxiao Liu*</div>
    <div class="periodical"><em>IEEE/ACM Transactions on Computational Biology and Bioinformatics(<strong>TCBB</strong>, DOI: 10.1109/TCBB.2019.2949780)</em></div>
    <div class="links">
      <a href="https://ieeexplore.ieee.org/document/8884123" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Link</a>
      <a href="javascript:void(0);" class="btn btn-sm z-depth-0" id="toggleAbstract1" role="button" style="font-size:12px;">Abstract</a>
      <div id="abstractContent1" style="display:none;background-color: #f5ebe0; color: #003049; font-size: 0.9em; padding: 15px;">  <!--font-style: italic; -->
        How to mine the interaction between SNPs (namely epistasis) efficiently and accurately must be considered when tackling the complexity of underlying biological mechanisms. In order to overcome the defect of low learning efficiency and local optimal, this work proposes an epistasis mining method using Artificial Fish Swarm optimizing Bayesian Network (AFSBN). This method uses the characteristics of global optimization, good robustness, and fast convergence of the artificial fish swarm algorithm, and uses the algorithm in the heuristic search strategy of the Bayesian network. The initial network structure can be evolved through the manipulations of foraging behavior, clustering behavior, tail-chasing behavior, and random behavior. This algorithm chooses different behaviors to modify the network state according to the changing of the surrounding environment and the states of partners. It realizes the interaction between each artificial fish and its neighboring environment and finally finds the optimal network in the population. We compared AFSBN with other existing algorithms on both simulated and real datasets. The experimental results demonstrate that our method outperforms others in epistasis detection accuracy in the case of not affecting the efficiency basically for different datasets.      </div>
      </div>
  </div>

</div>
</li>
</ol>
</div>
- Aimed to detect the interactions between genes (e.g., epistasis) by optimizing the structure of the Bayesian Network using the Artificial Fish Swarm Algorithm.

<script>
$(document).ready(function() {
    $("#toggleAbstract").click(function() {
        $("#abstractContent").toggle();
    });

    $("#toggleAbstract1").click(function() {
        $("#abstractContent1").toggle();
    });
});
</script>