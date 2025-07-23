# <font style="color:rgb(25, 27, 31);">1 梯度洗脱 OR 等度洗脱 ？</font>
_**<font style="color:rgb(25, 27, 31);">梯度洗脱</font>**_**<font style="color:rgb(25, 27, 31);">（gradient elution）</font>**<font style="color:rgb(25, 27, 31);">是指在洗脱过程中流动相组成是随运行过程变化的（例如5-100%乙腈-水），而</font>_**<font style="color:rgb(25, 27, 31);">等度洗脱</font>**_**<font style="color:rgb(25, 27, 31);">（isocratic elution）</font>**<font style="color:rgb(25, 27, 31);">是指洗脱全过程中流动相组成不变（例如35%乙腈-水）。</font>

## <font style="color:rgb(25, 27, 31);">1.1 使用等度洗脱的原因</font>
1. <font style="color:rgb(25, 27, 31);">有些实验室的HPLC仪是</font>**<font style="color:rgb(25, 27, 31);">单泵单通道</font>**<font style="color:rgb(25, 27, 31);">，因此</font>**<font style="color:rgb(25, 27, 31);">无法进行梯度洗脱</font>**<font style="color:rgb(25, 27, 31);">；</font>
2. <font style="color:rgb(25, 27, 31);">梯度洗脱更复杂，会增加新方法建立的难度；</font>
3. <font style="color:rgb(25, 27, 31);">有些HPLC检测器（如示差折光检测器等）不能使用梯度洗脱；</font>
4. <font style="color:rgb(25, 27, 31);">梯度洗脱方法运行后都需要重新平衡色谱柱，耗时较长；</font>
5. <font style="color:rgb(25, 27, 31);">由于不同的HPLC仪器存在不同的体积滞后，所以梯度洗脱方法在不同仪器间转移时可能会出现分离结果的差异；</font>
6. <font style="color:rgb(25, 27, 31);">梯度洗脱方法更容易出现</font><font style="color:rgb(25, 27, 31);">基线漂移</font><font style="color:rgb(25, 27, 31);">的问题，并且必须使用高纯溶剂；</font>
7. <font style="color:rgb(25, 27, 31);">某些色谱柱/</font>[<font style="color:rgb(25, 27, 31);">流动相</font>](https://zhida.zhihu.com/search?content_id=210666291&content_type=Article&match_order=3&q=%E6%B5%81%E5%8A%A8%E7%9B%B8&zhida_source=entity)<font style="color:rgb(25, 27, 31);">的组合不适合梯度洗脱；</font>
8. <font style="color:rgb(25, 27, 31);">当流动相中使用强保留的添加剂（如三乙胺，</font>**<font style="color:rgb(25, 27, 31);">疏水离子对试剂</font>**<font style="color:rgb(25, 27, 31);">等）会使梯度洗脱复杂化，由于柱再生变慢，分离重现性变差。</font>

## 1.2 使用梯度洗脱的优势
1. <font style="color:rgb(25, 27, 31);">当样品中</font>**<font style="color:rgb(25, 27, 31);">各成分性质差异很大，具有较宽的保留率k值</font>**<font style="color:rgb(25, 27, 31);">（即等度洗脱时不能使所有的谱峰达到0.5 < k < 20），这种情况下使用梯度洗脱可以使各成分的k值保持在合理的范围；</font>
2. <font style="color:rgb(25, 27, 31);">分析</font>**<font style="color:#DF2A3F;">大分子样品</font>**<font style="color:rgb(25, 27, 31);">，比如多肽、蛋白、合成聚合物等，一般采用梯度洗脱分离效果会更好，特别是用反相分离条件时。因为</font>**<font style="color:rgb(25, 27, 31);">这些样品的等度保留往往对流动相的组成（B%）的变化非常敏感</font>**<font style="color:rgb(25, 27, 31);">，难以将保留值控制在合理的范围内；</font>
3. <font style="color:rgb(25, 27, 31);">当样品中存在</font>**<font style="color:#DF2A3F;">强保留的干扰物时</font>**<font style="color:rgb(25, 27, 31);">，可能会</font>**<font style="color:#D22D8D;">污染色谱柱或者干扰后续的分析</font>**<font style="color:rgb(25, 27, 31);">，这时设计梯度洗脱方法可以在下一次进样前将这些晚流出的物质快速洗脱出色谱柱；因此在制备HPLC中，常常使用梯度洗脱；</font>
4. <font style="color:rgb(25, 27, 31);">有些样品</font>**<font style="color:#DF2A3F;">出峰靠后的峰的峰宽较大</font>**<font style="color:rgb(25, 27, 31);">，灵敏度偏低。当选择等度方法时，可以通过增大B%来加快出峰，从而减小峰宽来提高灵敏度。但是由于t0附近的干扰峰和极限波动，使这种方法的应用受到限制，而使用梯度方法时这些情况就可以避免；</font>
5. <font style="color:rgb(25, 27, 31);">对于溶解于</font>**<font style="color:rgb(25, 27, 31);">弱溶剂</font>**<font style="color:rgb(25, 27, 31);">（</font>**<font style="color:#DF2A3F;">避免出现强溶剂效应</font>**<font style="color:rgb(25, 27, 31);">）中的</font>**<font style="color:rgb(25, 27, 31);">稀样品</font>**<font style="color:rgb(25, 27, 31);">，使用梯度方法可以采用大体积进样（最近碰到在250*4.6 mm, 5 um规格的分析柱上进样1 ml稀样品的极端情况），而不会引起明显的峰展宽，这种情况下，样品在柱入口处就实现了柱上浓缩，因此可以大体积进样；等度洗脱也可以进行类似的柱上浓缩，但是由于进样过程中样品直接与洗脱能力强的流动相的混合，使样品体积过大，引起样品峰严重展宽。</font>

<font style="color:rgb(25, 27, 31);"></font>

## <font style="color:rgb(25, 27, 31);">1.3 如何选择？</font>
<font style="color:rgb(25, 27, 31);">用梯度洗脱还是等度洗脱，主要看杂质与杂质、主峰、溶剂峰的分离的情况。同一物质有梯度洗脱和等度洗脱两种条件时，梯度洗脱的认可度较高。下面就是更适合梯度洗脱的适用情况。</font>

<font style="color:rgb(25, 27, 31);">1、</font>**<font style="color:rgb(25, 27, 31);">多组分样品</font>**<font style="color:rgb(25, 27, 31);">的</font>**<font style="color:rgb(25, 27, 31);">极性范围大</font>**<font style="color:rgb(25, 27, 31);">，用等度无法全部洗脱的样品。</font>

<font style="color:rgb(25, 27, 31);">第一种情况：杂质和主成分极性相差很大，长时间杂质未能洗脱出来，就必须考虑用梯度。</font>

<font style="color:rgb(25, 27, 31);">第二种情况：杂质极性比主峰的大，等度时要想主峰时间合适杂质全堆在前边，杂质分开主峰又出峰太晚，这种情况也得考虑梯度洗脱。</font>

<font style="color:rgb(25, 27, 31);">2、大分子量样品（肽、蛋白质、合成聚合物等）一般采用梯度洗脱分离会更好，尤其是反相条件。这类样品，往往对有机相的量特别敏感，有机相的微小变化就会使样品的保留时间发生很大的变化，导致用等度条件检测时，无法使保留时间控制在一个稳定合适的范围内。</font>

<font style="color:rgb(25, 27, 31);">3、改善峰型。</font>

<font style="color:rgb(25, 27, 31);">4、目标峰出峰后，短时间内提高有机相比例，洗脱强保留干扰杂质。</font>

<font style="color:rgb(25, 27, 31);">5、用等度洗脱无法达到分离的情况。有些物质，特别是结构相近的物质，等度条件下无法达到分离，而采用梯度模式，因组分在有机相变化的选择性差异，可以达到分离，这种情况下就需要采用梯度条件进行测试。</font>

### <font style="color:rgb(25, 27, 31);">其他方法</font>
**<font style="color:rgb(25, 27, 31);">可以设计一个梯度方法来判断</font>**<font style="color:rgb(25, 27, 31);">。比如设计方法（</font>**<font style="color:rgb(25, 27, 31);">色谱柱：C18 150*4.6 mm, 5 um；流速：2 ml/min；柱温：35 ℃；流动相方法：5-100%乙腈-水，梯度时间60 min</font>**<font style="color:rgb(25, 27, 31);">）来分析取代苯胺样品，得到图1。最早流出的峰的保留时间tRa晚于2倍t0，晚流出峰tRz早于梯度结束，表明反相HPLC适合分析该样品。下一步可以通过谱图标出的第一个峰和最后一个峰的保留时间（图1中的tRa和tRz）来确定梯度还是等度洗脱更合适。如果我们设定保留时间差ΔtR = tRz-tRa，则比值ΔtR/tG可以决定等度分离是否可行：当要求0.5 < k < 20，ΔtR/tG < 0.25 log [(kz/ka)max] = 0.4，即该样品的保留值范围小于梯度时间的40%时，适合等度分离，否则梯度方法更合适；当要求1 < k < 10，ΔtR/tG < 0.25 log [(kz/ka)max] = 0.25，即该样品的保留值范围小于梯度时间的25%时，适合等度分离，否则梯度方法更合适。</font>

![](https://cdn.nlark.com/yuque/0/2025/png/2361109/1735723261171-93083f09-a7dd-4a84-9e38-74d3c7ce0558.png)

图1 取代苯胺的分析（色谱柱：C18 150*4.6 mm, 5 um；流速：2 ml/min；柱温：35 ℃；流动相方法：5-100%乙腈-水，梯度时间60 min）



# 2 如何选择合适的pKa
<font style="color:rgb(34, 34, 34);">pKa 值代表化合物 50% 电离和 50% 电离时的 pH 值。</font>

<font style="color:rgb(34, 34, 34);">在 HPLC 中，该信息对于选择最佳流动相条件非常宝贵。例如，如果化合物的 pKa 为 4，则可以策略性地使用选择 3 或 5 的流动相 pH 值来利用电离状态的差异来改善分离。</font>

[https://baijiahao.baidu.com/s?id=1740601687891738657](https://baijiahao.baidu.com/s?id=1740601687891738657)

